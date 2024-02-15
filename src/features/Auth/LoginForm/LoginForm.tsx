import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import AuthCustomLoadingButton from 'components/CustomButtons/AuthCustomLoadingButton/AuthCustomLoadingButton'
import { RouterPaths } from 'config/constant'
import {
  BoxStyle,
  CheckboxRootStyle,
  CheckedBoxStyle,
  CheckedRootStyle,
  RootStyle,
  TypographyStyle,
} from 'features/Auth/LoginForm/LoginForm.style'

import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { loginFormConfig } from 'features/Auth/LoginForm/LoginForm.constants'
import CustomTooltip from 'components/Tooltips/CustomTooltip/CustomTooltip'
import useLogin from 'features/Auth/LoginForm/useLogin'
import { useNavigate } from 'react-router'
import GenericInput from 'components/CustomInputs/GenericInput/GenericInput'
import { GlobalVariables } from 'config/constant'
import { InputSize, InputTypes } from 'types/interfaces/Input.type'
import { InputObject } from 'types/interfaces/FormTypes/InputObject'

function LoginForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const {
    stayConnected,
    handleStayConnectedChange,
    handleSubmit,
    formMethods,
  } = useLogin()
  const emailObject: InputObject = {
    label: 'auth.email',
    inputType: InputTypes.TEXT,
    fieldName: 'email',
    placeholder: 'common.mail_placeholder',
    autoComplete: true,
    defaultValue: '',
    valueOptions: {
      minLength: GlobalVariables.Inputs.shortText.minLength,
      maxLength: GlobalVariables.Inputs.longText.maxLength,
    },
    config: {
      required: 'auth.email_required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'auth.email_invalid',
      },
      minLength: {
        value: GlobalVariables.Inputs.shortText.minLength,
        message: 'auth.email_too_short',
      },
      maxLength: {
        value: GlobalVariables.Inputs.longText.maxLength,
        message: 'auth.email_too_long',
      },
    },
    size: InputSize.MEDIUM,
  }
  return (
    <FormProvider {...formMethods}>
      <RootStyle onSubmit={handleSubmit}>
        <Stack spacing={2.375} justifyContent='center'>
          <GenericInput inputObject={emailObject} />
          <GenericInput inputObject={loginFormConfig.password} />
          <Stack direction='row' alignItems={'center'}>
            <FormControlLabel
              label={
                <Stack direction='row' alignItems={'center'} spacing={0.5}>
                  <Typography variant='body1'>
                    {t('auth.stay_connected')}
                  </Typography>
                  <CustomTooltip
                    title={t('product.link_product_to_session_description')}
                  >
                    <BoxStyle>{/* <InfoIcon /> */}</BoxStyle>
                  </CustomTooltip>
                </Stack>
              }
              control={
                <Checkbox
                  icon={<CheckboxRootStyle />}
                  checkedIcon={
                    <CheckedRootStyle>
                      <CheckedBoxStyle />
                    </CheckedRootStyle>
                  }
                  size='small'
                  defaultChecked={stayConnected}
                  onChange={handleStayConnectedChange}
                />
              }
            />
          </Stack>
        </Stack>

        <Stack alignItems={'center'} paddingTop='29px' spacing={2.375}>
          <AuthCustomLoadingButton
            sx={{ width: { sm: '40%', xs: '70%' }, minWidth: '201px' }}
            // isLoading={isLoading}
            isLoading={false}
            type='submit'
          >
            {t('auth.connection')}
          </AuthCustomLoadingButton>
          <TypographyStyle
            variant='body1'
            onClick={() => navigate(RouterPaths.AuthPaths.forgetPasswordPath)}
          >
            {t('auth.forget_password')}
          </TypographyStyle>
        </Stack>
      </RootStyle>
    </FormProvider>
  )
}

export default LoginForm
