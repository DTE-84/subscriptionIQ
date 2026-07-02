import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, CreditCard } from 'lucide-react';

export default function Subscriptions() {
  const [search, setSearch] = useState('');

  const subscriptions = [
    { id: 1, name: 'Figma Professional', category: 'Software', cost: 15.00, billing: 'Monthly', status: 'Active', method: 'Visa ending in 4242', logo: '🎨' },
    { id: 2, name: 'AWS Cloud Services', category: 'Infrastructure', cost: 42.18, billing: 'Monthly', status: 'Active', method: 'Mastercard ending in 8812', logo: '☁️' },
    { id: 3, name: 'Netflix Premium', category: 'Entertainment', cost: 22.99, billing: 'Monthly', status: 'Active', method: 'Pulse Virtual Card', logo: '🍿' },
    { id: 4, name: 'Supabase Pro', category: 'Infrastructure', cost: 25.00, billing: 'Monthly', status: 'Active', method: 'Visa ending in 4242', logo: '⚡' },
    { id: 5, name: 'Vercel Hobby', category: 'Infrastructure', cost: 0.00, billing: 'Monthly', status: 'Active', method: 'None', logo: '▲' },
    { id: 6, name: 'Adobe Creative Cloud', category: 'Software', cost: 54.99, billing: 'Monthly', status: 'Paused', method: 'Visa ending in 4242', logo: '🖌️' }
  ];

  const filteredSubs = subscriptions.filter(sub => sub.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="animate-fade-in">
      <div className="flex-between mb-4">
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Active Subscriptions</h1>
          <p className="text-secondary">Manage your recurring billing and service providers.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add Subscription
        </button>
      </div>

      <div className="glass-panel delay-1" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input 
              type="text" 
              placeholder="Search subscriptions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 48px',
                backgroundColor: 'var(--bg-base)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '0.9rem'
              }}
            />
          </div>
          <button className="btn btn-secondary">
            <Filter size={18} />
            Filter
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}>
              <th style={{ padding: '16px 24px', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem', width: '35%' }}>Service Provider</th>
              <th style={{ padding: '16px 24px', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>Cost</th>
              <th style={{ padding: '16px 24px', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>Payment Method</th>
              <th style={{ padding: '16px 24px', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>Status</th>
              <th style={{ padding: '16px 24px', width: '60px' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredSubs.map((sub, i) => (
              <tr key={sub.id} style={{ borderBottom: i !== filteredSubs.length - 1 ? '1px solid var(--border-subtle)' : 'none', transition: 'background-color 0.2s', backgroundColor: 'transparent' }} className="hover-row">
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex-center" style={{ gap: '16px', justifyContent: 'flex-start' }}>
                    <div style={{ fontSize: '1.2rem', width: '36px', height: '36px', backgroundColor: 'var(--bg-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                      {sub.logo}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontWeight: 600 }}>{sub.name}</h4>
                      <span className="text-secondary" style={{ fontSize: '0.8rem' }}>{sub.category}</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <h4 style={{ margin: 0 }}>${sub.cost.toFixed(2)}</h4>
                  <span className="text-secondary" style={{ fontSize: '0.8rem' }}>{sub.billing}</span>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '8px' }}>
                    <CreditCard size={16} className="text-tertiary" />
                    <span style={{ fontSize: '0.9rem' }}>{sub.method}</span>
                  </div>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <span className={`badge ${sub.status === 'Active' ? 'badge-success' : ''}`} style={{ 
                    ...(sub.status !== 'Active' ? { backgroundColor: 'var(--bg-base)', color: 'var(--text-secondary)', border: '1px solid var(--border-strong)' } : {})
                  }}>
                    {sub.status}
                  </span>
                </td>
                <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                  <button className="btn-icon">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <style>{`
          .hover-row:hover { background-color: var(--bg-surface-hover) !important; cursor: pointer; }
        `}</style>
      </div>
    </div>
  );
}
