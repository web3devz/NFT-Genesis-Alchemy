/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  VRFConsumer,
  VRFConsumerInterface,
} from "../../contracts/VRFConsumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_VRFHostAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getRefValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "host",
    outputs: [
      {
        internalType: "contract VRFHostConsumerInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "refId",
        type: "uint256",
      },
    ],
    name: "isRandomValueReady",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "refId",
        type: "uint256",
      },
    ],
    name: "readRandomValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "saveRandomValue",
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

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b506040516105ef3803806105ef83398101604081905261003491610059565b600080546001600160a01b0319166001600160a01b0392909216919091179055610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b610557806100986000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063685b4afd11610050578063685b4afd146100b5578063f437bc59146100db578063ffeee3e71461010657600080fd5b80632b2dc3e81461006c578063519d3ba214610092575b600080fd5b61007f61007a3660046103c4565b61010e565b6040519081526020015b60405180910390f35b6100a56100a03660046103c4565b61021e565b6040519015158152602001610089565b61007f6100c33660046103c4565b60009081526002602052604090205463ffffffff1690565b6000546100ee906001600160a01b031681565b6040516001600160a01b039091168152602001610089565b61007f6102f3565b6000805482825260026020526040808320549051630dffa73d60e31b815263ffffffff909116600482015282916001600160a01b031690636ffd39e89060240160a060405180830381865afa15801561016b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018f91906103f1565b90506002816060015160028111156101a9576101a961048b565b14610214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f526f756e64206e6f742066696e616c697a656421000000000000000000000000604482015260640160405180910390fd5b6020015192915050565b60008181526002602052604081205463ffffffff16810361024157506000919050565b6000805483825260026020526040808320549051630dffa73d60e31b815263ffffffff90911660048201526001600160a01b0390911690636ffd39e89060240160a060405180830381865afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c291906103f1565b90506002816060015160028111156102dc576102dc61048b565b146102ea5750600092915050565b50600192915050565b60008054604080517f5727e25d000000000000000000000000000000000000000000000000000000008152905183926001600160a01b031691635727e25d9160048083019260209291908290030181865afa158015610356573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037a91906104a1565b61038491906104e4565b600180546000908152600260205260408120805463ffffffff191663ffffffff94909416939093179092558054916103bb83610508565b91905055905090565b6000602082840312156103d657600080fd5b5035919050565b8051600381106103ec57600080fd5b919050565b600060a0828403121561040357600080fd5b60405160a0810181811067ffffffffffffffff8211171561043457634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461044e57600080fd5b808252506020830151602082015260408301516040820152610472606084016103dd565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156104b357600080fd5b815163ffffffff811681146104c757600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b63ffffffff818116838216019080821115610501576105016104ce565b5092915050565b60006001820161051a5761051a6104ce565b506001019056fea2646970667358221220593880129f2ef91a4f540e19ac17f6859f65883cf844b018ba10322647f03e6a64736f6c63430008180033";

type VRFConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFConsumer__factory extends ContractFactory {
  constructor(...args: VRFConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _VRFHostAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_VRFHostAddress, overrides || {});
  }
  override deploy(
    _VRFHostAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_VRFHostAddress, overrides || {}) as Promise<
      VRFConsumer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VRFConsumer__factory {
    return super.connect(runner) as VRFConsumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFConsumerInterface {
    return new Interface(_abi) as VRFConsumerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): VRFConsumer {
    return new Contract(address, _abi, runner) as unknown as VRFConsumer;
  }
}
