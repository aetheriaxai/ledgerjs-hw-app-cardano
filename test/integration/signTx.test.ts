import { describeSignTxPositiveTest,describeSignTxRejects  } from "../test_utils"
import {
    testsAllegra,
    testsAlonzoTrezorComparison, testsBabbageTrezorComparison,
    testsByron,
    testsCatalystRegistration,
    testsMary,
    testsMultisig,
    testsShelleyNoCertificates,
    testsShelleyWithCertificates,
} from "./__fixtures__/signTx"
import { testsAlonzo, testsBabbage} from "./__fixtures__/signTxPlutus"
import {
    addressBytesRejectTestcases,
    addressParamsRejectTestcases,
    certificateRejectTestcases,
    certificateStakePoolRetirementRejectTestcases,
    certificateStakingRejectTestcases,
    singleAccountRejectTestcases,
    testsInvalidTokenBundleOrdering,
    transactionInitRejectTestcases,
    withdrawalRejectTestcases,
    witnessRejectTestcases,
} from "./__fixtures__/signTxRejects"

describeSignTxPositiveTest("signTxAlonzo", testsAlonzo)
describeSignTxPositiveTest("signTxBabbage", testsBabbage)
describeSignTxPositiveTest("signTxByron", testsByron)
describeSignTxPositiveTest("signTxShelleyNoCertificates", testsShelleyNoCertificates)
describeSignTxPositiveTest("signTxShelleyWithCertificates", testsShelleyWithCertificates)
describeSignTxPositiveTest("signTxMultisig", testsMultisig)
describeSignTxPositiveTest("signTxAllegra", testsAllegra)
describeSignTxPositiveTest("signTxMary", testsMary)
describeSignTxPositiveTest("signTxCatalyst", testsCatalystRegistration)
describeSignTxPositiveTest("signTxTrezorComparison", testsAlonzoTrezorComparison)
describeSignTxPositiveTest("signTxBabbageTrezorComparison", testsBabbageTrezorComparison)

describeSignTxRejects("signTxInitPolicyRejects", transactionInitRejectTestcases)
describeSignTxRejects("signTxAddressBytesPolicyRejects", addressBytesRejectTestcases)
describeSignTxRejects("signTxAddressParamsPolicyRejects", addressParamsRejectTestcases)
describeSignTxRejects("signTxCertificatePolicyRejects", certificateRejectTestcases)
describeSignTxRejects("signTxCertificateStakingPolicyRejects", certificateStakingRejectTestcases)
describeSignTxRejects("signTxCertificateStakePoolRetirementPolicyRejects", certificateStakePoolRetirementRejectTestcases)
describeSignTxRejects("signTxWithdrawalRejects", withdrawalRejectTestcases)
describeSignTxRejects("signTxWitnessRejects", witnessRejectTestcases)
describeSignTxRejects("signTxInvalidMultiassetRejects", testsInvalidTokenBundleOrdering)
describeSignTxRejects("signTxSingleAccountRejects", singleAccountRejectTestcases)
