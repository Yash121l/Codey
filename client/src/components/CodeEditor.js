import React from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

const CodeEditor = ({ language, value, onChange }) => {
    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <div className="code-editor">
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
