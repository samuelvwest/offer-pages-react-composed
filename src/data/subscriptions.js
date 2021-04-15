// Build durations texts object
export const durationTexts = {
    dur1: `Monthly`,
    dur3: `Quarterly`,
    dur6: `Semi-Annual`,
    dur12: `Annual`
}

// Packages data object
export const packagesData = [
    {
        id: `usdiscovery`,
        order: 1,
        name: `U.S. Discovery`,
        desc: ``,
        denyStr: `Ancestry_US_Deluxe`
    }, {
        id: `worldexplorer`,
        order: 2,
        name: `World Explorer`,
        desc: ``,
        denyStr: `Ancestry_World_Deluxe`
    }, {
        id: `allaccess`,
        order: 3,
        name: `All Access`,
        desc: ``,
        denyStr: `All_Access`
    }
]

// Available subscriptions data object
export const subscriptions = [
    {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 24.99,
            MSRP: 24.99
        },
        offerIDs: {
            initial: 'O-25401',
            renewal: 'O-25370',
            migration: 'O-26218'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-3MB_I',
            renewal: 'O-20301',
            migration: 'TD_US-3MR-3MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-1MB_I',
            renewal: 'TD_US-3MR-1MB_R',
            migration: 'TD_US-3MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-23589',
            migration: 'O-23644'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-26418',
            renewal: 'O-26415',
            migration: 'TD_US-6MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-12MB_I',
            renewal: 'O-23652',
            migration: 'O-23653'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-1MB_I',
            renewal: 'TD_US-12MR-1MB_R',
            migration: 'TD_US-12MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 39.99,
            MSRP: 39.99
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-25371',
            migration: 'O-26219'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-3MB_I',
            renewal: 'O-20303',
            migration: 'TD_WE-3MR-3MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-1MB_I',
            renewal: 'TD_WE-3MR-1MB_R',
            migration: 'TD_WE-3MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-22056',
            renewal: 'O-22054',
            migration: 'O-23637'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-26419',
            renewal: 'O-26416',
            migration: 'TD_WE-6MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-12MB_I',
            renewal: 'O-679',
            migration: 'O-681'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-1MB_I',
            renewal: 'TD_WE-12MR-1MB_R',
            migration: 'TD_WE-12MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 49.99,
            MSRP: 49.99
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-25376',
            migration: 'O-26220'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 99.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-3MB_I',
            renewal: 'O-26590',
            migration: 'TD_AA-3MR-3MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 99.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-1MB_I',
            renewal: 'TD_AA-3MR-1MB_R',
            migration: 'TD_AA-3MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 199,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-24567',
            renewal: 'O-24566',
            migration: 'O-24568'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 199,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-26420',
            renewal: 'O-26417',
            migration: 'TD_AA-6MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 389,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-12MB_I',
            renewal: 'O-24569',
            migration: 'O-24571'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 389,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-1MB_I',
            renewal: 'TD_AA-12MR-1MB_R',
            migration: 'TD_AA-12MR-1MB_M'
        }
    }
]

export const promoSubscriptions = [
    {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 24.99,
            MSRP: 24.99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-25370',
            migration: 'O-26218'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-3MB_I',
            renewal: 'O-20301',
            migration: 'TD_US-3MR-3MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 49.95,
            MSRP: 49.95
        },
        offerIDs: {
            initial: 'TD_US-3MR-1MB_I',
            renewal: 'TD_US-3MR-1MB_R',
            migration: 'TD_US-3MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-23590',
            renewal: 'O-23589',
            migration: 'O-23644'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 99,
            MSRP: 99
        },
        offerIDs: {
            initial: 'O-26418',
            renewal: 'O-26415',
            migration: 'TD_US-6MR-1MB_M'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-12MB_I',
            renewal: 'O-23652',
            migration: 'O-23653'
        }
    }, {
        packageID: 'usdiscovery',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 189,
            MSRP: 189
        },
        offerIDs: {
            initial: 'TD_US-12MR-1MB_I',
            renewal: 'TD_US-12MR-1MB_R',
            migration: 'TD_US-12MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 39.99,
            MSRP: 39.99
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-25371',
            migration: 'O-26219'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-3MB_I',
            renewal: 'O-20303',
            migration: 'TD_WE-3MR-3MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 79.95,
            MSRP: 79.95
        },
        offerIDs: {
            initial: 'TD_WE-3MR-1MB_I',
            renewal: 'TD_WE-3MR-1MB_R',
            migration: 'TD_WE-3MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-25405',
            renewal: 'O-22054',
            migration: 'O-23637'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 149,
            MSRP: 149
        },
        offerIDs: {
            initial: 'O-26419',
            renewal: 'O-26416',
            migration: 'TD_WE-6MR-1MB_M'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-12MB_I',
            renewal: 'O-679',
            migration: 'O-681'
        }
    }, {
        packageID: 'worldexplorer',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 299,
            MSRP: 299
        },
        offerIDs: {
            initial: 'TD_WE-12MR-1MB_I',
            renewal: 'TD_WE-12MR-1MB_R',
            migration: 'TD_WE-12MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 1,
            billMonths: 1,
            displayPrice: 33.99,
            MSRP: 49.99
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-25376',
            migration: 'O-26220'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 3,
            displayPrice: 68.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-3MB_I',
            renewal: 'TD_AA-3MR-3MB_R',
            migration: 'TD_AA-3MR-3MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 3,
            billMonths: 1,
            displayPrice: 68.95,
            MSRP: 99.95
        },
        offerIDs: {
            initial: 'TD_AA-3MR-1MB_I',
            renewal: 'TD_AA-3MR-1MB_R',
            migration: 'TD_AA-3MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 6,
            displayPrice: 139,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-25410',
            renewal: 'O-24566',
            migration: 'O-24568'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 6,
            billMonths: 1,
            displayPrice: 139,
            MSRP: 199
        },
        offerIDs: {
            initial: 'O-26420',
            renewal: 'O-26417',
            migration: 'TD_AA-6MR-1MB_M'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 12,
            displayPrice: 272,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-12MB_I',
            renewal: 'O-24569',
            migration: 'O-24571'
        }
    }, {
        packageID: 'allaccess',
        currency: '$',
        initialPeriod: {
            duration: 14,
            durationType: 'Day',
            type: 'Trial',
            displayPrice: '0'
        },
        renewalPeriod: {
            renewMonths: 12,
            billMonths: 1,
            displayPrice: 272,
            MSRP: 389
        },
        offerIDs: {
            initial: 'TD_AA-12MR-1MB_I',
            renewal: 'TD_AA-12MR-1MB_R',
            migration: 'TD_AA-12MR-1MB_M'
        }
    }
]

export default subscriptions;