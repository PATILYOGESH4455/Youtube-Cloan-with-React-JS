import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
            title="Become a React developer in 10 hours | 2019/2020"
            timestamp=" 3 days ago"
            views='2.3M Views'         
            channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            image = "https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        
        <VideoCard 
          title="SQL Tutorial For Beginners In Hindi | SQL Full Course In Hindi"
          timestamp=" 4 days ago"
          views='1.5M Views'         
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniOm2F8SBEjkRzbrVVpgiC4Yq8FqY4b9AdaYDl4FA=s88-c-k-c0x00ffffff-no-rj"
          channel="Great Learning"
          image = "https://i.ytimg.com/vi/1dWCqjhvF58/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC96xD6KLU2kZbc3jYGFtUcnupb2g"
        />

        <VideoCard
          title="The Power Of Positive Thinking | 2019/2020"
          timestamp=" 1 days ago"
          views='5.3M Views'         
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj8SOhg2g30a3ev1dfqRcH70le6WehfEY4b6tvh4g=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Sandeep Maheshwari"
          image = "https://yt3.ggpht.com/ytc/AAUvwnj8SOhg2g30a3ev1dfqRcH70le6WehfEY4b6tvh4g=s176-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          title="Dream Big and Achive Big..!"
          timestamp=" 1 days ago"
          views='2.3M Views'         
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngTzgXvh9cYMwmPgsBt2BFv49rPwB0URIh_rd-w=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="MM"
          image = "https://yt3.ggpht.com/ytc/AAUvwniNTDIUibNIZwwUWC820n6i3yPz-rnBDwOpZED1CQY=s88-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="The story of farmer family IAS office!"
          timestamp=" 8 days ago"
          views='5 M Views'         
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnh6dub-mMeiFOvbb5ysUvAVcnAFQtl0CtLEiuwm=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Josh Talk"
          image = "https://i.ytimg.com/an_webp/h1mK48rSkCU/mqdefault_6s.webp?du=3000&sqp=CJSE5_4F&rs=AOn4CLD5drTiovhawTOFr1SCA000LAUevg"
        />
        <VideoCard
            title="Become a React developer in 10 hours | 2019/2020"
            timestamp=" 3 days ago"
            views='2.3M Views'         
            channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            image = "https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          title="Dream Big and Achive Big!"
          timestamp=" 1 days ago"
          views='2.3M Views'         
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngTzgXvh9cYMwmPgsBt2BFv49rPwB0URIh_rd-w=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="MM"
          image = "https://yt3.ggpht.com/ytc/AAUvwniNTDIUibNIZwwUWC820n6i3yPz-rnBDwOpZED1CQY=s88-c-k-c0x00ffffff-no-rj"
        />
        <VideoCard
          title="The story of farmer family IAS office!"
          timestamp=" 8 days ago"
          views='5 M Views'         
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnh6dub-mMeiFOvbb5ysUvAVcnAFQtl0CtLEiuwm=s176-c-k-c0x00ffffff-no-rj-mo"
          channel="Josh Talk"
          image = "https://i.ytimg.com/an_webp/h1mK48rSkCU/mqdefault_6s.webp?du=3000&sqp=CJSE5_4F&rs=AOn4CLD5drTiovhawTOFr1SCA000LAUevg"
        />  
      </div>
    </div>
  );
}

export default RecommendedVideos;
