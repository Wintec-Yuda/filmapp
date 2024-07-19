import { FaCalendar } from 'react-icons/fa';

interface CardProps {
    title: string;
    year: string;
    poster: string;
}

const Card: React.FC<CardProps> = ({ title, year, poster }) => {
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="w-full object-cover" src={poster} alt={title} />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-xl font-semibold">
                        {title}
                    </p>
                    <p className="text-sm flex items-center gap-1 underline">
                        <FaCalendar className='inline' />
                        {year}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
