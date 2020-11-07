import React from 'react'
import { Platform } from 'react-native'
export default {
    HeavyOblique: 'FuturaPTHeavyOblique',
    Bold: Platform.select({ ios: 'Futura-Bold', android: 'FuturaPTBold' }),
    BoldOblique: 'FuturaPTBoldOblique',
    Book: 'FuturaPTBook',
    BookOblique: 'FuturaPTBookOblique',
    CondBold: 'FuturaPTCondBold',
    CondBoldOblique: 'FuturaPTCondBoldOblique',
    CondBook: 'FuturaPTCondBook',
    CondBookOblique: 'FuturaPTCondBookOblique',
    CondExtraBold: 'FuturaPTCondExtraBold',
    CondExtraBoldOblique: 'CondExtraBoldOblique',
    CondMedium: 'FuturaPTCondMedium',
    CondMediumOblique: 'FuturaPTCondMediumOblique',
    Demi: 'FuturaPTDemi',
    DemiOblique: 'FuturaPTDemiOblique',
    ExtraBold: 'FuturaPTExtraBold',
    ExtraBoldOblique: 'FuturaPTExtraBoldOblique',
    Heavy: 'FuturaPTHeavy',
    Light: Platform.select({ ios: 'Futura', android: 'FuturaPTLight' }),
    LightOblique: 'FuturaPTLightOblique',
    Medium: Platform.select({ ios: 'Futura-Medium', android: 'FuturaPTMedium' }),
    MediumOblique: 'FuturaPTMediumOblique'
}