/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageStoreEntriesApi } from './MessageStoreEntriesApi';
import { MessageStoreEntryAttachmentPropertiesApi } from './MessageStoreEntryAttachmentPropertiesApi';
import { MessageStoreEntryAttachmentsApi } from './MessageStoreEntryAttachmentsApi';
import { MessageStoreEntryPropertiesApi } from './MessageStoreEntryPropertiesApi';
import { MessageProcessingLogsApi } from './MessageProcessingLogsApi';
import { JmsBrokersApi } from './JmsBrokersApi';
import { NumberRangesApi } from './NumberRangesApi';
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

export function messageStore<
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
): MessageStore<
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
  return new MessageStore(mergeDefaultDeSerializersWith(deSerializers));
}
class MessageStore<
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

  get messageStoreEntriesApi(): MessageStoreEntriesApi<DeSerializersT> {
    const api = this.initApi('messageStoreEntriesApi', MessageStoreEntriesApi);
    const linkedApis = [
      this.initApi(
        'messageStoreEntryAttachmentsApi',
        MessageStoreEntryAttachmentsApi
      ),
      this.initApi(
        'messageStoreEntryPropertiesApi',
        MessageStoreEntryPropertiesApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get messageStoreEntryAttachmentPropertiesApi(): MessageStoreEntryAttachmentPropertiesApi<DeSerializersT> {
    return this.initApi(
      'messageStoreEntryAttachmentPropertiesApi',
      MessageStoreEntryAttachmentPropertiesApi
    );
  }

  get messageStoreEntryAttachmentsApi(): MessageStoreEntryAttachmentsApi<DeSerializersT> {
    const api = this.initApi(
      'messageStoreEntryAttachmentsApi',
      MessageStoreEntryAttachmentsApi
    );
    const linkedApis = [
      this.initApi(
        'messageStoreEntryAttachmentPropertiesApi',
        MessageStoreEntryAttachmentPropertiesApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get messageStoreEntryPropertiesApi(): MessageStoreEntryPropertiesApi<DeSerializersT> {
    return this.initApi(
      'messageStoreEntryPropertiesApi',
      MessageStoreEntryPropertiesApi
    );
  }

  get messageProcessingLogsApi(): MessageProcessingLogsApi<DeSerializersT> {
    const api = this.initApi(
      'messageProcessingLogsApi',
      MessageProcessingLogsApi
    );
    const linkedApis = [
      this.initApi('messageStoreEntriesApi', MessageStoreEntriesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get jmsBrokersApi(): JmsBrokersApi<DeSerializersT> {
    return this.initApi('jmsBrokersApi', JmsBrokersApi);
  }

  get numberRangesApi(): NumberRangesApi<DeSerializersT> {
    return this.initApi('numberRangesApi', NumberRangesApi);
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
