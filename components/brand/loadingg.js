import { randomNumberInRange } from '@/libs/functions';

export default function Loading() {

    //const count = randomNumberInRange(2, 7);

    return (
        <div className="brand">
            <div className="title">
                <span className="skeleton stitle"></span>
            </div>
            <div className="colors">
                {[...Array(5).keys()].map(i => (
                    <span className="skeleton scolor" key={i}></span>
                ))}
            </div>
        </div>
    )
}
