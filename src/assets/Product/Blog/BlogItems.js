import tag from './tag-normal.svg'
import tagHover from './tag-green.svg'
import user from './user_normal.svg'
import userHover from './user_green.svg'
import chat from './chat-normal.svg'
import chatHover from './chat-green.svg'
import ArrowRightSource from './arrow-right-green.svg'
import ArrowRightGreenSource from './arrow-right.svg'

const BlogItems = [
    {
        Name: 'The tag Icon', 
        SourceURL: tag,
        SourceHoverURL: tagHover,
        available: true,
        subTitle: false,
        Title: 'Food'
    },
    {
        Name: 'The user Icon', 
        SourceURL: user,
        SourceHoverURL: userHover,
        available: true,
        subTitle: 'Admin',
        Title: 'by'
    },
    {
        Name: 'The message Icon', 
        SourceURL: chat,
        SourceHoverURL: chatHover,
        available: false,
        subTitle: '65 Comments'
    },
]

export default BlogItems

export const ArrowRight = ArrowRightSource
export const ArrowRightGreen = ArrowRightGreenSource
