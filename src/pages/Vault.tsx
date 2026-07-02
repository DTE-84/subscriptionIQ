import { useState } from 'react';
import { Plus, Shield, Lock, Eye, EyeOff, Copy, ExternalLink, Check, MoreVertical } from 'lucide-react';

export default function Vault() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [revealedId, setRevealedId] = useState<number | null>(null);

  const credentials = [
    { id: 1, service: 'Figma', username: 'drew@dte.solutions', url: 'figma.com' },
    { id: 2, service: 'AWS Console', username: 'admin-dte', url: 'aws.amazon.com' },
    { id: 3, service: 'Supabase', username: 'drew@dte.solutions', url: 'supabase.com' },
    { id: 4, service: 'Vercel', username: 'dte-llc', url: 'vercel.com' },
    { id: 5, service: 'Bank of America', username: 'drew.business', url: 'bankofamerica.com' }
  ];

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    // In real app, write to clipboard
  };

  const toggleReveal = (id: number) => {
    setRevealedId(revealedId === id ? null : id);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex-between mb-4">
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Security Vault</h1>
          <p className="text-secondary">AES-256 Client-side Encrypted Credentials.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          New Credential
        </button>
      </div>

      <div className="glass-panel delay-1 mb-4" style={{ backgroundColor: 'var(--primary-transparent)', border: '1px solid var(--border-gold)' }}>
        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '16px' }}>
          <div style={{ padding: '12px', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
            <Shield size={24} className="text-gold" />
          </div>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Zero-Knowledge Architecture</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
              Your master key never leaves this device. We cannot read your passwords, even if requested.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-cards delay-2">
        {credentials.map((cred) => (
          <div key={cred.id} className="glass-panel" style={{ padding: '20px' }}>
            <div className="flex-between mb-3">
              <div className="flex-center" style={{ gap: '12px', justifyContent: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-base)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)' }}>
                  <Lock size={18} className="text-secondary" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{cred.service}</h3>
                  <a href={`https://${cred.url}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {cred.url} <ExternalLink size={10} />
                  </a>
                </div>
              </div>
              <button className="btn-icon">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <div style={{ backgroundColor: 'var(--bg-base)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ marginBottom: '16px' }}>
                <span className="text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Username / Email</span>
                <div className="flex-between mt-1">
                  <span style={{ fontSize: '0.95rem', fontFamily: 'monospace' }}>{cred.username}</span>
                  <button className="btn-icon" style={{ padding: '4px' }}>
                    <Copy size={14} />
                  </button>
                </div>
              </div>
              
              <div>
                <span className="text-secondary" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Password</span>
                <div className="flex-between mt-1">
                  <span style={{ fontSize: '0.95rem', fontFamily: 'monospace', color: revealedId === cred.id ? 'var(--text-primary)' : 'var(--text-tertiary)', letterSpacing: revealedId === cred.id ? 'normal' : '2px' }}>
                    {revealedId === cred.id ? 'c0mpl3xP@ssw0rd!2026' : '••••••••••••••••'}
                  </span>
                  <div className="flex-center" style={{ gap: '8px' }}>
                    <button className="btn-icon" style={{ padding: '4px' }} onClick={() => toggleReveal(cred.id)}>
                      {revealedId === cred.id ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    <button className="btn-icon" style={{ padding: '4px' }} onClick={() => handleCopy(cred.id)}>
                      {copiedId === cred.id ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


