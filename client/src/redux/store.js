import {configureStore} from '@reduxjs/toolkit'

import singupdetaila  from './signup'

export const store= configureStore({

    reducer:{
        singup:singupdetaila,
    }
})