import {mappings as oldMappings} from '@aemforms/af-react-components'
import NumberInput from './NumberInput'
import Text from './Text'
export const mappings = {
    ...oldMappings,
    'plain-text' : Text,
    'number-input' : NumberInput
}