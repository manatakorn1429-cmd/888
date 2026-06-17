import React, { useState } from 'react';

function App() {
  // --- 1. STATES ---
  const [todos, setTodos] = useState([
    { id: 1, text: '🚀 สรุปสูตรคณิตศาสตร์ ม.ปลาย' },
    { id: 2, text: '🏋️‍♂️ ไปฟิตเนสตอนเย็น (อก + แขน)' },
    { id: 3, text: '🛒 ซื้อของเข้าบ้าน (นม, ไข่, ขนมปัง)' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  // --- 2. CRUD OPERATIONS ---

  // [C]reate: เพิ่มรายการใหม่
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // [D]elete: ลบรายการ
  const handleDeleteTodo = (id) => {
    if (window.confirm('คุณแน่ใจใช่ไหมว่าจะลบรายการนี้?')) {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    }
  };

  // [U]pdate - Step 1: เลือกรายการที่จะแก้ไข
  const handleEditClick = (todo) => {
    setIsEditing(todo.id);
    setInputValue(todo.text);
  };

  // [U]pdate - Step 2: บันทึกข้อมูลที่แก้ไขแล้ว
  const handleUpdateTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === isEditing) {
        return { ...todo, text: inputValue };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setInputValue('');
    setIsEditing(null);
  };

  // ยกเลิกการแก้ไข
  const handleCancelEdit = () => {
    setIsEditing(null);
    setInputValue('');
  };

  // --- 3. STYLES (Modern Clean UI) ---
  const styles = {
    container: {
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#333'
    },
    title: {
      textAlign: 'center',
      marginBottom: '25px',
      fontSize: '28px',
      fontWeight: '700',
      color: '#4F46E5'
    },
    form: {
      display: 'flex',
      gap: '10px',
      marginBottom: '25px'
    },
    input: {
      flex: 1,
      padding: '12px 16px',
      borderRadius: '8px',
      border: '2px solid #E5E7EB',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    btnSubmit: {
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: isEditing ? '#F59E0B' : '#4F46E5',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    btnCancel: {
      padding: '12px 16px',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
      backgroundColor: '#F3F4F6',
      color: '#4B5563',
      fontSize: '16px',
      cursor: 'pointer'
    },
    todoList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    todoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#F9FAFB',
      marginBottom: '10px',
      border: '1px solid #F3F4F6',
      wordBreak: 'break-word'
    },
    todoText: {
      fontSize: '16px',
      color: '#1F2937',
      flex: 1,
      paddingRight: '15px'
    },
    actionBox: {
      display: 'flex',
      gap: '8px',
      flexShrink: 0
    },
    btnEdit: {
      padding: '6px 12px',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#FEF3C7',
      color: '#D97706',
      fontWeight: '500',
      cursor: 'pointer'
    },
    btnDelete: {
      padding: '6px 12px',
      borderRadius: '6px',
      border: 'none',
      backgroundColor: '#FEE2E2',
      color: '#DC2626',
      fontWeight: '500',
      cursor: 'pointer'
    },
    emptyState: {
      textAlign: 'center',
      color: '#9CA3AF',
      marginTop: '30px',
      fontStyle: 'italic'
    }
  };

  // --- 4. RENDER UI ---
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 My Tasks</h2>

      {/* ฟอร์มสำหรับการ เพิ่ม/แก้ไข ข้อมูล */}
      <form onSubmit={isEditing ? handleUpdateTodo : handleAddTodo} style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="มีอะไรที่ต้องทำบ้างไหมวันนี้?..."
          style={styles.input}
          autoFocus
        />
        <button type="submit" style={styles.btnSubmit}>
          {isEditing ? 'อัปเดต' : 'เพิ่ม'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancelEdit} style={styles.btnCancel}>
            ยกเลิก
          </button>
        )}
      </form>

      {/* [R]ead: วนลูปแสดงผลรายการ Todo */}
      {todos.length === 0 ? (
        <p style={styles.emptyState}>เยี่ยมเลย! ไม่มีงานค้างแล้ว 🎉</p>
      ) : (
        <ul style={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.todoItem}>
              <span style={styles.todoText}>{todo.text}</span>
              <div style={styles.actionBox}>
                <button onClick={() => handleEditClick(todo)} style={styles.btnEdit}>
                  แก้ไข
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)} style={styles.btnDelete}>
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;