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
} from "../../common";

export type RegistrationParamsStruct = {
  name: string;
  encryptedEmail: BytesLike;
  upkeepContract: AddressLike;
  gasLimit: BigNumberish;
  adminAddress: AddressLike;
  triggerType: BigNumberish;
  checkData: BytesLike;
  triggerConfig: BytesLike;
  offchainConfig: BytesLike;
  amount: BigNumberish;
};

export type RegistrationParamsStructOutput = [
  name: string,
  encryptedEmail: string,
  upkeepContract: string,
  gasLimit: bigint,
  adminAddress: string,
  triggerType: bigint,
  checkData: string,
  triggerConfig: string,
  offchainConfig: string,
  amount: bigint
] & {
  name: string;
  encryptedEmail: string;
  upkeepContract: string;
  gasLimit: bigint;
  adminAddress: string;
  triggerType: bigint;
  checkData: string;
  triggerConfig: string;
  offchainConfig: string;
  amount: bigint;
};

export interface GraviolaRegisterUpkeepInterface extends Interface {
  getFunction(
    nameOrSignature: "i_link" | "i_registrar" | "register"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "UpkeepRegistered"): EventFragment;

  encodeFunctionData(functionFragment: "i_link", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "i_registrar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [RegistrationParamsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "i_link", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "i_registrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
}

export namespace UpkeepRegisteredEvent {
  export type InputTuple = [id: BigNumberish];
  export type OutputTuple = [id: bigint];
  export interface OutputObject {
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GraviolaRegisterUpkeep extends BaseContract {
  connect(runner?: ContractRunner | null): GraviolaRegisterUpkeep;
  waitForDeployment(): Promise<this>;

  interface: GraviolaRegisterUpkeepInterface;

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

  i_link: TypedContractMethod<[], [string], "view">;

  i_registrar: TypedContractMethod<[], [string], "view">;

  register: TypedContractMethod<
    [params: RegistrationParamsStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "i_link"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "i_registrar"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [params: RegistrationParamsStruct],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "UpkeepRegistered"
  ): TypedContractEvent<
    UpkeepRegisteredEvent.InputTuple,
    UpkeepRegisteredEvent.OutputTuple,
    UpkeepRegisteredEvent.OutputObject
  >;

  filters: {
    "UpkeepRegistered(uint256)": TypedContractEvent<
      UpkeepRegisteredEvent.InputTuple,
      UpkeepRegisteredEvent.OutputTuple,
      UpkeepRegisteredEvent.OutputObject
    >;
    UpkeepRegistered: TypedContractEvent<
      UpkeepRegisteredEvent.InputTuple,
      UpkeepRegisteredEvent.OutputTuple,
      UpkeepRegisteredEvent.OutputObject
    >;
  };
}
