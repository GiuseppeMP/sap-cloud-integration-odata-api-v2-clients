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
import type { MessageProcessingLogAttachmentsApi } from './MessageProcessingLogAttachmentsApi';

/**
 * This class represents the entity "MessageProcessingLogAttachments" of service "com.sap.hci.api".
 */
export class MessageProcessingLogAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogAttachmentsType<T>
{
  /**
   * Technical entity name for MessageProcessingLogAttachments.
   */
  static override _entityName = 'MessageProcessingLogAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogAttachments entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Guid.
   * @nullable
   */
  declare messageGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Stamp.
   * @nullable
   */
  declare timeStamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Content Type.
   * @nullable
   */
  declare contentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payload Size.
   * @nullable
   */
  declare payloadSize?: DeserializedType<T, 'Edm.Int64'> | null;

  constructor(_entityApi: MessageProcessingLogAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  messageGuid?: DeserializedType<T, 'Edm.String'> | null;
  timeStamp?: DeserializedType<T, 'Edm.DateTime'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  payloadSize?: DeserializedType<T, 'Edm.Int64'> | null;
}
