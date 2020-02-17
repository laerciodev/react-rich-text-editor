import React, { useEffect, useMemo, useState } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

 const TextEditor = () => {

    const editor = useMemo(() => withReact(createEditor()), [])
    
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in paragraph.' }]
        }
    ]);
    
    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable />
        </Slate>
    )

}

export default TextEditor;