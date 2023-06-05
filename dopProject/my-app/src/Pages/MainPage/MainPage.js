import "./MainPage.css"
import pngArm from '../../../src/images/categories/for-hand.png'
import pngBeck from '../../../src/images/categories/for-back.png'
import pngNeck from '../../../src/images/categories/for-neck.png'
import pngLeg from '../../../src/images/categories/for-eye.png'
import {Link} from "react-router-dom";


const AllImages = [
    {
        id: 1,
        image: pngArm,
        title: "Для рук",
        alt: "ExerciseForArms"
    },
    {
        id: 2,
        image: pngBeck,
        title: "Для спины"
    },
    {
        id: 3,
        image: pngNeck,
        title: "Для шеи"
    },
    {
        id: 4,
        image: pngLeg,
        title: "Для ног",
        alt: "ExerciseForLegs"
    }
]

const MainPage = () => {
    return (
        <>
            <h2>Категории</h2>
            <div className='BlockImg'>
                {AllImages.map((categories) =>
                    <Link to={`/InfoExercise/${categories.alt}`}>
                        <img
                            src={categories.image}
                            alt={'alt'}
                            className='images'
                            key={categories.id}
                        />
                        <p className={"titleP"}>{categories.title}</p>
                    </Link>
                    )}
            </div>
        </>
    )
}

export default MainPage;