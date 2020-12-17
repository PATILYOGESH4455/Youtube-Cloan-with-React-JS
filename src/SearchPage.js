import React from 'react'
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className= "searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>

            </div>
            <hr/>
            <ChannelRow

                image="https://yt3.ggpht.com/ytc/AAUvwniuJZIlOprzRwNTPjJauZw2ipg-Tw2fOitzTvxmwQ=s88-c-k-c0x00ffffff-no-rj"
                channel="A to Z Everithing"
                verified
                subs="800k"
                noOfVideos={250}
                description= "You can find everything what you learn to be"
            />
            <hr/>
            <VideoRow
                views ="1.4 M"
                subs ="659k"
                description="The King Of Good Times. Today's hard works built tomorrows empires..!"
                timestamp="50 second ago"
                channel = "Think Befor Act"
                title =" Josh Talks"
                image ="https://yt3.ggpht.com/ytc/AAUvwnglL3MbJMOzqt8z_4dMoK6j338gqU6azO5z8HQ9ZQ=s88-c-k-c0x00ffffff-no-rj"
            
            />
            <VideoRow
                views ="1.4 M"
                subs ="659k"
                description="The King Of Good Times. Today's hard works built tomorrows empires..!"
                timestamp="50 second ago"
                channel = "Think Befor Act"
                title =" A to Z Everithing Here..!"
                image ="https://yt3.ggpht.com/ytc/AAUvwng_Fd8mWuEMvJ9nEP8nAVw2Ig8d5eQUFWTxMrF94w=s88-c-k-c0x00ffffff-no-rj"
            
            />
            <VideoRow
                views ="1.4 M"
                subs ="659k"
                description="The King Of Good Times. Today's hard works built tomorrows empires..!"
                timestamp="50 second ago"
                channel = "Clever Programmer"
                title ="Clever Programmer"
                image ="https://i.ytimg.com/an_webp/zeqJ-GppCDI/mqdefault_6s.webp?du=3000&sqp=CPr46P4F&rs=AOn4CLAz2FZRp22dY6TjmOpI6lZWqL8YaA"
            
            />
            <VideoRow
                views ="1.4 M"
                subs ="659k"
                description="The King Of Good Times. Today's hard works built tomorrows empires..!"
                timestamp="50 second ago"
                channel = "All time evergreen Music"
                title ="Zee Music"
                image ="https://yt3.ggpht.com/ytc/AAUvwniayS5WllYgeNjIAPtQ2mvATH8Su5oSs18Qy-VQsg=s176-c-k-c0x00ffffff-no-rj-mo"
            
            />
            <VideoRow
                views ="1.4 M"
                subs ="659k"
                description="The King Of Good Times. Today's hard works built tomorrows empires..!"
                timestamp="50 second ago"
                channel = "A to Z Everithing Here..!"
                title ="Think Befor Act"
                image ="https://yt3.ggpht.com/ytc/AAUvwniayS5WllYgeNjIAPtQ2mvATH8Su5oSs18Qy-VQsg=s176-c-k-c0x00ffffff-no-rj-mo"
            
            />
        </div>
    )
}

export default SearchPage
