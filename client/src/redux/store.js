import {configureStore} from '@reduxjs/toolkit'

import singupdetaila  from './singup'

export const store= configureStore({

    reducer:{
        singup:singupdetaila,
    }
})