/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface IAIOracleInterface extends Interface {
  getFunction(
    nameOrSignature: "estimateFee" | "isFinalized" | "requestCallback"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AICallbackRequest" | "AICallbackResult"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "estimateFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isFinalized",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestCallback",
    values: [BigNumberish, BytesLike, AddressLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestCallback",
    data: BytesLike
  ): Result;
}

export namespace AICallbackRequestEvent {
  export type InputTuple = [
    account: AddressLike,
    requestId: BigNumberish,
    modelId: BigNumberish,
    input: BytesLike,
    callbackContract: AddressLike,
    gasLimit: BigNumberish,
    callbackData: BytesLike
  ];
  export type OutputTuple = [
    account: string,
    requestId: bigint,
    modelId: bigint,
    input: string,
    callbackContract: string,
    gasLimit: bigint,
    callbackData: string
  ];
  export interface OutputObject {
    account: string;
    requestId: bigint;
    modelId: bigint;
    input: string;
    callbackContract: string;
    gasLimit: bigint;
    callbackData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AICallbackResultEvent {
  export type InputTuple = [
    invoker: AddressLike,
    requestId: BigNumberish,
    output: BytesLike
  ];
  export type OutputTuple = [
    invoker: string,
    requestId: bigint,
    output: string
  ];
  export interface OutputObject {
    invoker: string;
    requestId: bigint;
    output: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IAIOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IAIOracle;
  waitForDeployment(): Promise<this>;

  interface: IAIOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  estimateFee: TypedContractMethod<
    [modelId: BigNumberish, gasLimit: BigNumberish],
    [bigint],
    "view"
  >;

  isFinalized: TypedContractMethod<
    [requestId: BigNumberish],
    [boolean],
    "view"
  >;

  requestCallback: TypedContractMethod<
    [
      modelId: BigNumberish,
      input: BytesLike,
      callbackContract: AddressLike,
      gasLimit: BigNumberish,
      callbackData: BytesLike
    ],
    [bigint],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "estimateFee"
  ): TypedContractMethod<
    [modelId: BigNumberish, gasLimit: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "isFinalized"
  ): TypedContractMethod<[requestId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "requestCallback"
  ): TypedContractMethod<
    [
      modelId: BigNumberish,
      input: BytesLike,
      callbackContract: AddressLike,
      gasLimit: BigNumberish,
      callbackData: BytesLike
    ],
    [bigint],
    "payable"
  >;

  getEvent(
    key: "AICallbackRequest"
  ): TypedContractEvent<
    AICallbackRequestEvent.InputTuple,
    AICallbackRequestEvent.OutputTuple,
    AICallbackRequestEvent.OutputObject
  >;
  getEvent(
    key: "AICallbackResult"
  ): TypedContractEvent<
    AICallbackResultEvent.InputTuple,
    AICallbackResultEvent.OutputTuple,
    AICallbackResultEvent.OutputObject
  >;

  filters: {
    "AICallbackRequest(address,uint256,uint256,bytes,address,uint64,bytes)": TypedContractEvent<
      AICallbackRequestEvent.InputTuple,
      AICallbackRequestEvent.OutputTuple,
      AICallbackRequestEvent.OutputObject
    >;
    AICallbackRequest: TypedContractEvent<
      AICallbackRequestEvent.InputTuple,
      AICallbackRequestEvent.OutputTuple,
      AICallbackRequestEvent.OutputObject
    >;

    "AICallbackResult(address,uint256,bytes)": TypedContractEvent<
      AICallbackResultEvent.InputTuple,
      AICallbackResultEvent.OutputTuple,
      AICallbackResultEvent.OutputObject
    >;
    AICallbackResult: TypedContractEvent<
      AICallbackResultEvent.InputTuple,
      AICallbackResultEvent.OutputTuple,
      AICallbackResultEvent.OutputObject
    >;
  };
}
