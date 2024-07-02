import docgif from '../assets/docgif.webp'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="bot-avatar">
          <img src={docgif} alt="" />
        </div>
        <div className="buttons">
            <button>Back to Hava</button>
            <button>Chat History</button>
            <button>Log Out</button>
        </div>
        <div className="copyright">&#169;2024 Havva Diagnostics</div>
      </div>
    </div>
  );
};

export default Sidebar;
