/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { MessageProcessingLogErrorInformationsApi } from './MessageProcessingLogErrorInformationsApi';

/**
 * This class represents the entity "MessageProcessingLogErrorInformations" of service "com.sap.hci.api".
 */
export class MessageProcessingLogErrorInformations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogErrorInformationsType<T>
{
  /**
   * Technical entity name for MessageProcessingLogErrorInformations.
   */
  static override _entityName = 'MessageProcessingLogErrorInformations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogErrorInformations entity.
   */
  static _keys = ['MessageGuid'];
  /**
   * Message Guid.
   */
  declare messageGuid: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Error Model Step Id.
   * @nullable
   */
  declare lastErrorModelStepId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessageProcessingLogErrorInformationsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogErrorInformationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  messageGuid: DeserializedType<T, 'Edm.String'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
  lastErrorModelStepId?: DeserializedType<T, 'Edm.String'> | null;
}
