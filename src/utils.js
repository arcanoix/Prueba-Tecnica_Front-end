export const validateMinLength = (value) => {
                return value.length >= 4;
}

export const validateNotString = (value) => {
                
                if(value.includes('iseijasunow'))
                {
                                return false
                }

                return true;
}