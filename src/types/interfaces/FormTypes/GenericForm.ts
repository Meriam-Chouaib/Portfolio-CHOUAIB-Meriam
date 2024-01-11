import { RegisterOptions } from 'react-hook-form'
import { AlertObject } from '../AlertObject'
import { FileConfig } from './FilesForm'
import { InputObject, InputsArray } from './InputObject'
import { SxProps } from '@mui/material'

export default interface GenericForm<ValueType, OptionType, DependsOnType> {
  id: number
  type?: formTypes
  name: string
  order: number
  text: string
  value: ValueType
  options?: OptionsType<OptionType>[] | string[] | unknown[]
  description?: string
  message?: string
  disabled?: boolean | string
  dependsOn?: InputDependency<DependsOnType>
  config?: RegisterOptions | FileConfig
  alert?: InputALert<DependsOnType>
  inputs?: InputObject[]
  forms?: InputsArray[]
  submitCount?: number
  isNotValid?: boolean
  validate?: (value: unknown) => boolean
  isAutoGenerated?: boolean | string
  isRequired?: boolean
  styles?: SxProps
  maxFiles?: number
  hideFilesDescriptions?: boolean
  selectedInputDependedValue?: number
  dependedInputObject?: InputObject
  formInformation?: string
}

export interface InputDependency<T> {
  value: T
  id: number
}

export interface OptionsType<T> {
  label: string
  value: T
}

export enum formTypes {
  TEXT = 'text',
  INTERROGATIVE = 'interrogative',
  SELECT_LIST = 'select_list',
  IMAGE_UPLOAD = 'image_upload',
  FILES_UPLOAD = 'files_upload',
  INPUTS = 'inputs',
  DISABLED_FORM = 'disabled_form',
  INTEGRATED_INPUTS = 'integrated_inputs',
  INPUTS_ARRAY = 'inputs_array',
  CHECK = 'check',
  CHECK_LIST = 'check_list',
  SIGNATURE = 'signature',
  COLLAPSE_FORM = 'collapse',
}

export type InputALert<T> = {
  content: AlertObject
  dependency?: InputDependency<T>
}
