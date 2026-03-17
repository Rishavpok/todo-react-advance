import './UndoRedoButton.css'
export default function UndoRedoButton({ label }) {
  return (
    <button className="undo-btn" disabled>{label}</button>
  )
}