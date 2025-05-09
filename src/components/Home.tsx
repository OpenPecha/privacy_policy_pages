import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// List of OpenPecha products with custom colors
const products = [
  { name: 'Monlam Dictionary', id: 'MonlamDictionary', icon: '📚', color: '#6366f1' }, // Indigo
  { name: 'Monlam GrandTibetan', id: 'MonlamGrandTibetan', icon: '🔍', color: '#ec4899' }, // Pink
  { name: 'Monlam Tibetan-Chinese', id: 'MonlamTibetanChinese', icon: '🈷️', color: '#f59e0b' }, // Amber
  { name: 'Monlam Bod-Eng', id: 'MonlamBodEng', icon: '🌐', color: '#10b981' }, // Emerald
  { name: 'Monlam BoEng', id: 'MonlamBoEng', icon: '📝', color: '#8b5cf6' }, // Violet
  { name: 'Monlam Tibetan Keyboard', id: 'MonlamTibetanKeyboard', icon: '⌨️', color: '#0ea5e9' } // Sky
];

function Home() {
  useEffect(() => {
    // Update document title
    document.title = 'OpenPecha - Privacy Policies';
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="gradient-text">OpenPecha Privacy Policies</div>
        <p className="hero-description">
          At OpenPecha, we value your privacy. Select a product below to view its privacy policy.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <Link 
            to={`/${product.id}`} 
            className="product-card" 
            key={product.id}
            style={{
              borderTop: `4px solid ${product.color}`,
              background: `linear-gradient(to bottom, ${product.color}10, white)`
            }}
          >
            <div className="product-icon" style={{ backgroundColor: product.color }}>
              <span className="icon-placeholder">{product.icon}</span>
            </div>
            <h3 style={{ color: product.color }}>{product.name}</h3>
            <div className="view-policy-button" style={{ backgroundColor: product.color }}>
              View Privacy Policy
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
