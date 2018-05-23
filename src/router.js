import Start from './components/Start.vue'
import QuestionOne from './components/QuestionOne.vue'
import QuestionTwo from './components/QuestionTwo.vue'
import QuestionThree from './components/QuestionThree.vue'
import QuestionFour from './components/QuestionFour.vue'
import QuestionFive from './components/QuestionFive.vue'
import QuestionSix from './components/QuestionSix.vue'
import Result from './components/Result.vue'

export const routes = [
    {
        path: '',
        component: Start,
        name: 'Start'
    },
    {
        path: '/question-one',
        component: QuestionOne
    },
    {
        path: '/question-two',
        component: QuestionTwo
    },
    {
        path: '/question-three',
        component: QuestionThree
    },
    {
        path: '/question-four',
        component: QuestionFour

    },
    {
        path: '/question-five',
        component: QuestionFive
    },
    {
        path: '/question-six',
        component: QuestionSix
    },
    {
        path: '/result',
        component: Result
    },
    {
        path: '*',
        redirect: { name: 'Start' }
    }
]