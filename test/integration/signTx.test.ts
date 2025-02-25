import {describeSignTxPositiveTest, describeSignTxRejects} from '../test_utils'
import {
  testsAllegra,
  testsAlonzoTrezorComparison,
  testsBabbageTrezorComparison,
  testsByron,
  testsMary,
  testsMultisig,
  testsShelleyNoCertificates,
  testsShelleyWithCertificates,
} from './__fixtures__/signTx'
import {testsAlonzo, testsBabbage} from './__fixtures__/signTxPlutus'
import {
  addressParamsRejectTestCases,
  certificateRejectTestCases,
  certificateStakePoolRetirementRejectTestCases,
  certificateStakingRejectTestCases,
  collateralOutputRejectTestCases,
  singleAccountRejectTestCases,
  testsInvalidTokenBundleOrdering,
  transactionInitRejectTestCases,
  withdrawalRejectTestCases,
  witnessRejectTestCases,
} from './__fixtures__/signTxRejects'

describeSignTxPositiveTest('signTxAlonzo', testsAlonzo)
describeSignTxPositiveTest('signTxBabbage', testsBabbage)
describeSignTxPositiveTest('signTxByron', testsByron)
describeSignTxPositiveTest(
  'signTxShelleyNoCertificates',
  testsShelleyNoCertificates,
)
describeSignTxPositiveTest(
  'signTxShelleyWithCertificates',
  testsShelleyWithCertificates,
)
describeSignTxPositiveTest('signTxMultisig', testsMultisig)
describeSignTxPositiveTest('signTxAllegra', testsAllegra)
describeSignTxPositiveTest('signTxMary', testsMary)
describeSignTxPositiveTest(
  'signTxTrezorComparison',
  testsAlonzoTrezorComparison,
)
describeSignTxPositiveTest(
  'signTxBabbageTrezorComparison',
  testsBabbageTrezorComparison,
)

describeSignTxRejects('signTxInitPolicyRejects', transactionInitRejectTestCases)
describeSignTxRejects(
  'signTxAddressParamsPolicyRejects',
  addressParamsRejectTestCases,
)
describeSignTxRejects(
  'signTxCertificatePolicyRejects',
  certificateRejectTestCases,
)
describeSignTxRejects(
  'signTxCertificateStakingPolicyRejects',
  certificateStakingRejectTestCases,
)
describeSignTxRejects(
  'signTxCertificateStakePoolRetirementPolicyRejects',
  certificateStakePoolRetirementRejectTestCases,
)
describeSignTxRejects('signTxWithdrawalRejects', withdrawalRejectTestCases)
describeSignTxRejects('signTxWitnessRejects', witnessRejectTestCases)
describeSignTxRejects(
  'signTxInvalidMultiassetRejects',
  testsInvalidTokenBundleOrdering,
)
describeSignTxRejects(
  'signTxSingleAccountRejects',
  singleAccountRejectTestCases,
)
describeSignTxRejects(
  'signTxCollateralOutputRejects',
  collateralOutputRejectTestCases,
)
