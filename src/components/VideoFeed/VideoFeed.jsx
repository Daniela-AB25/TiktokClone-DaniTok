import VideoPlayer from "../VideoPlayer/VideoPlayer"
import styles from "./styles.module.css"

const Videos = [
  {
    id: 1,
    author: "endlessWaves",
    description: "Something to help you clear your head",
    likes: 85,
    shares: 54,
    comments: 22,
    songTitle: "Relaxing tunes",
    albumCover: "https://res.cloudinary.com/dtetsfefb/image/upload/v1719822410/pexels-umaraffan499-21787_jidl2a.jpg",
    src: "https://res.cloudinary.com/dtetsfefb/video/upload/v1719245919/6010489-uhd_2160_3840_25fps_nln6c3.mp4"
  },
  {
    id: 2,
    author: "kittiesallaround",
    description: "What's better than one kitty? TWO KITTIES #cats #cute #kitty",
    likes: 143,
    shares: 102,
    comments: 56,
    songTitle: "Tiny Little Thing - BubbleCat",
    albumCover: "https://res.cloudinary.com/dtetsfefb/image/upload/v1719823750/pexels-sydney-troxell-223521-708488_ls7ygj.jpg",
    src: "https://res.cloudinary.com/dtetsfefb/video/upload/v1719588740/4624594-hd_1080_1920_30fps_eiqjo5.mp4"
  }
]

export default function VideoFeed() {
  return (
    Videos.map(video => {
      return (
        <div className={styles.item} key={video.id}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}