import { BsGithub } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { BsDiscord } from 'react-icons/bs'
import codeImageLink from '../assets/react.svg'
import badgeImage from '../assets/badges.jpg'
import bannerImage from '../assets/banner.png'
import cardImage from '../assets/Card.png'
import testimonialsImage from '../assets/testimonials.png'

const Data = {

    pageTitle:"React Component Library",
    CompoentElement:{
        component_1:{
            title:"Badges",
            subtitle:"Elevate Your UI with Colorful and Versatile Badges",
            code:`import Badge from "./component/badges/badge"
export default function App(){            
return (
    <main>
        <Badge 
            color='green'
            size='S6'
            rounded='Pill'
        >
            Badge text
        </Badge>
    </main>
)
}
            `,
            componentImageLink:badgeImage
        },
        component_2:{
            title:"Banners",
            subtitle:"Effortless Alert Banners for Every Occasion",
            code:`import Banner from "./component/Banners/Banner"
export default function App(){            
return (
    <main>
        <Banner 
            status='success'
            line="multible"
        >
            message text
        </Banner>
        <Banner 
            status='error'
            line="single" 
        />
    </main>
)
}
            `,
            componentImageLink:bannerImage
        },
        component_3:{
            title:"Cards",
            subtitle:"Stylish and Versatile Cards for Any Content",
            code:`import Card from "./component/Cards/index"
export default function App(){            
return (
    <main>
        <Card 
            color='purple'
            LibararyIcon={<BsDiscord />}
        >
            <Card.Title>
                card title
            </Card.Title>
            <Card.Text>
                card text 
            </Card.Text>
        </Card>
    </main>
)
}
            `,
            componentImageLink:cardImage
        },
        component_4:{
            title:"Testimonials",
            subtitle:"Share Customer Stories with Stunning Testimonials",
            code:`import Card from "./component/Cards/index"
export default function App(){            
return (
<main>
    //with image 
    <Testimonial 
        bgColor='blue'
        textColor='white'
        imagePath='../assets/img_1.png'
    >
        <Testimonial.Text>
            text over here
        </Testimonial.Text>
        <Testimonial.Auth>
            author over here
        </Testimonial.Auth>
    </Testimonial>
</main>
)
}
            `,
            componentImageLink:testimonialsImage
        },
    },
    icons:{
        GithubIcon:{
            link:'https://github.com/elm-Saad/React_Component_Library.git/src/component/',
            icon:<BsGithub/>
        },
        TwitterIcon:{
            link:'https://twitter.com/elm_saad',
            icon:<FaXTwitter />
        },
        DiscordIcon:{
            link:'https://discordapp.com/users/1126369754962210826',
            icon:<BsDiscord />
        }
    },
    footerImage :codeImageLink 
}
export default Data