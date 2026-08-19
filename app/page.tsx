export default function Home() {
  return (
    <main className="annora-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">A</div>
          <div>
            <div className="brand-name">ANNORA AI</div>
            <div className="brand-sub">Private intelligence platform</div>
          </div>
        </div>

        <button className="new-chat">＋ New conversation</button>

        <div>
          <div className="nav-label">Workspace</div>
          <div className="chat-item active">Welcome to Annora</div>
          <div className="chat-item">Knowledge Vault</div>
          <div className="chat-item">Memory</div>
        </div>

        <div className="sidebar-footer">
          Annora AI Core v0.1<br />
          Built by Annora Studios
        </div>
      </aside>

      <section className="main">
        <header className="topbar">
          <div className="status"><span className="dot" /> Annora Core online</div>
          <button className="profile" aria-label="Profile">N</button>
        </header>

        <div className="chat">
          <div className="hero">
            <div className="eyebrow">Annora Intelligence</div>
            <h1>Think. Create. Build.</h1>
            <p>
              Your intelligent creative and business partner — designed to combine
              intelligence, knowledge, memory and tools in one private workspace.
            </p>
          </div>

          <div className="composer">
            <input aria-label="Message Annora" placeholder="Ask Annora anything..." />
            <div className="composer-row">
              <span className="hint">Private workspace · AI gateway ready</span>
              <button className="send">Send</button>
            </div>
          </div>

          <div className="capabilities">
            <div className="card"><strong>Creative</strong><span>Design, branding, content and creative direction.</span></div>
            <div className="card"><strong>Business</strong><span>Strategy, planning, research and decision support.</span></div>
            <div className="card"><strong>Technology</strong><span>Code, automation, systems and AI development.</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
