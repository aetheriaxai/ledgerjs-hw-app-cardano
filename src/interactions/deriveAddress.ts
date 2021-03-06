import type { SendFn, } from "../Ada";
import cardano from "../cardano";
import type { ParsedAddressParams, Version } from "../types/internal";
import type { DeriveAddressResponse, } from '../types/public'
import { INS } from "./common/ins";

export async function deriveAddress(
  _send: SendFn,
  _version: Version,
  addressParams: ParsedAddressParams,
): Promise<DeriveAddressResponse> {
  const P1_RETURN = 0x01;
  const P2_UNUSED = 0x00;

  const data = cardano.serializeAddressParams(addressParams);

  const response = await _send({
    ins: INS.DERIVE_ADDRESS,
    p1: P1_RETURN,
    p2: P2_UNUSED,
    data: data,
  });

  return {
    addressHex: response.toString("hex"),
  };
}
