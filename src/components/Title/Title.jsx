import './Title.css';

export const Title = ({ children, scrollValue }) => {
    return (
        <h1 className={`title${scrollValue > 350 ? ' --active' : ''}`}>
            {children}
        </h1>
    );
};
