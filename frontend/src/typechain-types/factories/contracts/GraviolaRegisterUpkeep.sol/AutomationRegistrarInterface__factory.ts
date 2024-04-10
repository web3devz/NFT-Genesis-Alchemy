/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  AutomationRegistrarInterface,
  AutomationRegistrarInterfaceInterface,
} from "../../../contracts/GraviolaRegisterUpkeep.sol/AutomationRegistrarInterface";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "encryptedEmail",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "upkeepContract",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "gasLimit",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "adminAddress",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "triggerType",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "checkData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "triggerConfig",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "offchainConfig",
            type: "bytes",
          },
          {
            internalType: "uint96",
            name: "amount",
            type: "uint96",
          },
        ],
        internalType: "struct RegistrationParams",
        name: "requestParams",
        type: "tuple",
      },
    ],
    name: "registerUpkeep",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class AutomationRegistrarInterface__factory {
  static readonly abi = _abi;
  static createInterface(): AutomationRegistrarInterfaceInterface {
    return new Interface(_abi) as AutomationRegistrarInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AutomationRegistrarInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AutomationRegistrarInterface;
  }
}
