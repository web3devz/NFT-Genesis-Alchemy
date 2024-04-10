/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IKeeperRegistry,
  IKeeperRegistryInterface,
} from "../../contracts/IKeeperRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getUpkeep",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "executeGas",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "checkData",
            type: "bytes",
          },
          {
            internalType: "uint96",
            name: "balance",
            type: "uint96",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "maxValidBlocknumber",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "lastPerformBlockNumber",
            type: "uint32",
          },
          {
            internalType: "uint96",
            name: "amountSpent",
            type: "uint96",
          },
          {
            internalType: "bool",
            name: "paused",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "offchainConfig",
            type: "bytes",
          },
        ],
        internalType: "struct UpkeepInfo",
        name: "upkeepInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IKeeperRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IKeeperRegistryInterface {
    return new Interface(_abi) as IKeeperRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IKeeperRegistry {
    return new Contract(address, _abi, runner) as unknown as IKeeperRegistry;
  }
}
