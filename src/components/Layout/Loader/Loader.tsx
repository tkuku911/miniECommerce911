import { FC } from 'react';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={`loader ${className ? className : ''}`}>
            <h1>Loading ...</h1>
        </div>
    );
};
