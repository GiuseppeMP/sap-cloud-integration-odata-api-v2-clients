/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartnersApi } from './PartnersApi';
import { UserCredentialParametersApi } from './UserCredentialParametersApi';
import { AuthorizedUsersApi } from './AuthorizedUsersApi';
import { AlternativePartnersApi } from './AlternativePartnersApi';
import { StringParametersApi } from './StringParametersApi';
import { BinaryParametersApi } from './BinaryParametersApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function partnerDirectory<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): PartnerDirectory<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new PartnerDirectory(mergeDefaultDeSerializersWith(deSerializers));
}
class PartnerDirectory<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get partnersApi(): PartnersApi<DeSerializersT> {
    return this.initApi('partnersApi', PartnersApi);
  }

  get userCredentialParametersApi(): UserCredentialParametersApi<DeSerializersT> {
    return this.initApi(
      'userCredentialParametersApi',
      UserCredentialParametersApi
    );
  }

  get authorizedUsersApi(): AuthorizedUsersApi<DeSerializersT> {
    return this.initApi('authorizedUsersApi', AuthorizedUsersApi);
  }

  get alternativePartnersApi(): AlternativePartnersApi<DeSerializersT> {
    return this.initApi('alternativePartnersApi', AlternativePartnersApi);
  }

  get stringParametersApi(): StringParametersApi<DeSerializersT> {
    return this.initApi('stringParametersApi', StringParametersApi);
  }

  get binaryParametersApi(): BinaryParametersApi<DeSerializersT> {
    return this.initApi('binaryParametersApi', BinaryParametersApi);
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
