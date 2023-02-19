import { useCallback, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Image as ImageIcon, TextBolder, TextItalic, TextStrikethrough } from 'phosphor-react'

import { useEditor, EditorContent, type PureEditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'

import { Label } from '../Label'
import { Container, Bar, BarItem, Editor } from './styles'

interface TextEditorProps {
  name: string
  label?: string
  mandatory?: boolean
}

export function TextEditor({ name, label, mandatory }: TextEditorProps) {
  const ref = useRef<PureEditorContent>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  const editor = useEditor({
    content: defaultValue && `<p>${String(defaultValue)}</p>`,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write your text here...'
      }),
      Image.configure({
        allowBase64: true
      })
    ],
    editorProps: {
      attributes: {
        class: 'editor-content'
      }
    }
  })

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      getValue: () => {
        return ref.current?.props.editor?.getHTML() ?? undefined
      }
    })
  }, [fieldName, ref])

  const addImage = useCallback(() => {
    if (!editor) return

    const url = window.prompt('Paste the image URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  return (
    <Container>
      {label && <Label
        text={label}
        mandatory={mandatory}
        error={error}
      />}

      <Editor>
        <Bar>
          {editor && <>
            <BarItem
              onClick={() => editor.chain().focus().toggleBold().run()}
              isDisabled={!editor.can().chain().focus().toggleBold().run()}
              isActive={editor.isActive('bold')}
            >
              <TextBolder size={16} weight='bold' />
            </BarItem>

            <BarItem
              onClick={() => editor.chain().focus().toggleItalic().run()}
              isDisabled={!editor.can().chain().focus().toggleItalic().run()}
              isActive={editor.isActive('italic')}
            >
              <TextItalic size={16} weight='bold' />
            </BarItem>

            <BarItem
              onClick={() => editor.chain().focus().toggleStrike().run()}
              isDisabled={!editor.can().chain().focus().toggleStrike().run()}
              isActive={editor.isActive('strike')}
            >
              <TextStrikethrough size={16} weight='bold' />
            </BarItem>

            <BarItem onClick={addImage}>
              <ImageIcon size={16} weight='bold' />
            </BarItem>
          </>}
        </Bar>

        <EditorContent ref={ref} editor={editor} />
      </Editor>
    </Container>
  )
}
