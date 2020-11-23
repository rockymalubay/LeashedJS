import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import MemoryCard from '../comps/MemoryCard';
import FinalDayCard from '../comps/FinalDayCard';
import { useRouter } from 'next/router';

function Training2(props) {

    console.warn('data', props)
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="Background">
            <div className="TopBar">
                <TopPart
                    openMenu={expanded}
                    onClick={() => {
                        setExpanded(!expanded)
                    }}
                    onReturn={() => {
                        setExpanded(!expanded)
                    }}
                    // onClick={()=>{
                    //     router.push('/Training')
                    // }}
                    TopHeight="200px"
                    Pagename={props.title}
                    Stat="You are on: Day 1"

                // icon={"/arrow_b_l.png"}
                />
            </div>
            <div className="DaysSection">
                {
                    props.days.map((day, index) => {
                        return (
                            <MemoryCard
                                id={day}
                                text={"Day " + (index + 1)}
                                border="5px solid #F9CB40"
                                date="Incomplete"
                            />
                        )
                    })
                }

                {/* <div className="DayCards">
                    <MemoryCard
                        text="Day 1"
                        border="5px solid #F9CB40"
                        date="Incomplete"
                    />
                    <MemoryCard
                        text="Day 2"
                        border="5px solid #F9CB40"
                        date="Incomplete"
                    />
                </div>
                <div className="DayCards">
                    <MemoryCard
                        text="Day 3"
                        border="5px solid #F9CB40"
                        date="Incomplete"
                    />
                    <MemoryCard
                        text="Day 4"
                        border="5px solid #F9CB40"
                        date="Incomplete"
                    />
                </div>
                <div className="DayCards">
                    <MemoryCard
                        text="Day 5"
                        border="5px solid #F9CB40"
                        date="Incomplete"
                    />
                    <MemoryCard
                        text="Day 6"
                        border="5px solid #F9CB40"
                        date="Incomplete"
                    />
                </div> */}
                <div className="FinalDay">
                    <FinalDayCard
                        day="Day 7"
                        text=" Final Day!"
                        completeion="Incomplete"
                    />
                </div>
            </div>
        </div>
    )
}

Training2.getInitialProps = ({ req, query }) => {
    return { ...query }
}

export default Training2;