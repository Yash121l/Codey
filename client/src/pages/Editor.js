import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import { savePen } from '../services/penService';

function Editor() {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    const handleSave = async () => {
        const newPen = { html, css, js };
        await savePen(newPen);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            <CodeEditor language="xml" value={html} onChange={setHtml} title="HTML" />
            <CodeEditor language="css" value={css} onChange={setCss} title="CSS" />
            <CodeEditor language="javascript" value={js} onChange={setJs} title="JavaScript" />
            <button
                onClick={handleSave}
                className="col-span-1 lg:col-span-3 mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Save Pen
            </button>
        </div>
    );
}

export default Editor;
