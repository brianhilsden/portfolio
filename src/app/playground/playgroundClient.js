"use client";
import React, { useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import { motion, AnimatePresence } from "framer-motion";

const CodePlayground = () => {
    const [html, setHtml] = useState(`<h2 class="colorText">Click me to change my color!</h2>`);
    const [css, setCss] = useState(`.colorText { font-size: 24px; color: blue; cursor: pointer;}`);
    const [js, setJs] = useState(`document.querySelector('.colorText').onclick = function() {
      this.style.color = this.style.color === 'blue' ? 'red' : 'blue';
    };`);
  const [language, setLanguage] = useState("html");
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');

  const generateSrcDoc = () => {
    return `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (error) {
              window.parent.postMessage({ type: 'error', message: error.message }, '*');
            }
          </script>
        </body>
      </html>
    `;
  };

  const togglePreview = () => {
    setShowPreview((prev) => !prev);
  };

  const handleDownload = () => {
    const fileContent = generateSrcDoc();
    const blob = new Blob([fileContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code_playground.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the URL.createObjectURL
  };

  useEffect(() => {
    const handleMessage = (event) => {
        if (event.data.type === 'error') {
            setError(event.data.message);
        }
    };

    // Add event listener on mount
    window.addEventListener('message', handleMessage);
    
    // Clean up the event listener on unmount
    return () => {
        window.removeEventListener('message', handleMessage);
    };
}, []); // Empty dependency array to run only once on mount

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white py-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Interactive Code Playground
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-xl text-gray-300 mb-4"
      >
        Select a language (HTML, CSS, or
        JavaScript), write your code in the editor below,  and click <span className="font-bold">Show Live Preview</span> to see your work in action!
      </motion.p>

      {/* Language Selection */}
      <div className="flex items-center mb-4">
        <label className="text-lg font-semibold text-neutral-dark mr-2">
          Select Language:
        </label>
        <motion.select
          className="border border-gray-600 p-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-150"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          whileTap={{ scale: 0.95 }}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </motion.select>
      </div>

      {/* Code Editors */}
      <div className="flex flex-col gap-4 mb-6">
        <AnimatePresence>
          {language === "html" && (
            <motion.div
              key="html"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                HTML
              </label>
              <MonacoEditor
                height="200px"
                language="html"
                theme="vs-dark"
                value={html}
                onChange={(value) => setHtml(value)}
              />
            </motion.div>
          )}

          {language === "css" && (
            <motion.div
              key="css"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                CSS
              </label>
              <MonacoEditor
                height="200px"
                language="css"
                theme="vs-dark"
                value={css}
                onChange={(value) => setCss(value)}
              />
            </motion.div>
          )}

          {language === "javascript" && (
            <motion.div
              key="javascript"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                JavaScript
              </label>
              <MonacoEditor
                height="200px"
                language="javascript"
                theme="vs-dark"
                value={js}
                onChange={(value) => setJs(value)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Preview Button */}
      <div className="flex justify-center mb-6">
        <motion.button
          onClick={togglePreview}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="md:w-[20%] w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
          transition={{ type: "spring", stiffness: 100 }}
        >
          {showPreview ? "Hide Live Preview" : "Show Live Preview"}
        </motion.button>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mb-6">
        <motion.button
          onClick={handleDownload}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="md:w-[20%] w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
          transition={{ type: "spring", stiffness: 100 }}
        >
          Download Code
        </motion.button>
      </div>

      {/* Live Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-2">
              Live Preview
            </h3>
            <iframe
              srcDoc={generateSrcDoc()}
              title="Output"
              sandbox="allow-scripts"
              className="w-full h-[75vh] border border-neutral-dark rounded-md bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodePlayground;
