import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommandPalette.css';

const commands = [
  { id: 'home', label: 'Go to Home', icon: 'fas fa-home', action: 'navigate', path: '/home' },
  { id: 'about', label: 'Go to About', icon: 'fas fa-user', action: 'navigate', path: '/about' },
  { id: 'projects', label: 'Go to Projects', icon: 'fas fa-code', action: 'navigate', path: '/projects' },
  { id: 'contact', label: 'Go to Contact', icon: 'fas fa-envelope', action: 'navigate', path: '/contact' },
  { id: 'divider-1', divider: true },
  { id: 'linkedin', label: 'Open LinkedIn', icon: 'fab fa-linkedin', action: 'link', url: 'https://www.linkedin.com/in/vadaparthisubhash/' },
  { id: 'github', label: 'Open GitHub', icon: 'fab fa-github', action: 'link', url: 'https://github.com/KL2300030695' },
  { id: 'youtube', label: 'Open YouTube', icon: 'fab fa-youtube', action: 'link', url: 'https://www.youtube.com/@ThinkingUpgraded' },
  { id: 'divider-2', divider: true },
  { id: 'cv', label: 'Download Resume', icon: 'fas fa-download', action: 'link', url: '/Subhash_Vadaparthi_Resume.pdf' },
  { id: 'theme', label: 'Toggle Theme', icon: 'fas fa-moon', action: 'theme' },
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filtered = commands.filter((c) => {
    if (c.divider) return true;
    return c.label.toLowerCase().includes(query.toLowerCase());
  });

  // Remove orphan dividers
  const visibleCommands = filtered.filter((c, i, arr) => {
    if (!c.divider) return true;
    const next = arr[i + 1];
    const prev = arr[i - 1];
    return next && !next.divider && prev && !prev.divider;
  });

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const executeCommand = (cmd) => {
    if (!cmd || cmd.divider) return;
    onClose();
    if (cmd.action === 'navigate') {
      navigate(cmd.path);
    } else if (cmd.action === 'link') {
      if (cmd.url.startsWith('/')) {
        const a = document.createElement('a');
        a.href = cmd.url;
        a.download = '';
        a.click();
      } else {
        window.open(cmd.url, '_blank');
      }
    } else if (cmd.action === 'theme') {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  };

  const onKeyDown = (e) => {
    const selectableItems = visibleCommands.filter((c) => !c.divider);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % selectableItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + selectableItems.length) % selectableItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(selectableItems[activeIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  let selectableIndex = -1;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()} onKeyDown={onKeyDown}>
        <div className="palette-search">
          <i className="fas fa-search palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="palette-input"
          />
          <kbd className="palette-esc">ESC</kbd>
        </div>
        <div className="palette-list">
          {visibleCommands.map((cmd) => {
            if (cmd.divider) {
              return <div key={cmd.id} className="palette-divider" />;
            }
            selectableIndex++;
            const isActive = selectableIndex === activeIndex;
            return (
              <button
                key={cmd.id}
                className={`palette-item${isActive ? ' active' : ''}`}
                onClick={() => executeCommand(cmd)}
                onMouseEnter={() => setActiveIndex(selectableIndex)}
              >
                <i className={cmd.icon} />
                <span>{cmd.label}</span>
                {cmd.action === 'link' && <i className="fas fa-arrow-up-right-from-square palette-ext" />}
              </button>
            );
          })}
          {visibleCommands.filter((c) => !c.divider).length === 0 && (
            <div className="palette-empty">No commands found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
