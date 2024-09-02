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
import type { MessageStoreEntryAttachmentPropertiesApi } from './MessageStoreEntryAttachmentPropertiesApi';

/**
 * This class represents the entity "MessageStoreEntryAttachmentProperties" of service "com.sap.hci.api".
 */
export class MessageStoreEntryAttachmentProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageStoreEntryAttachmentPropertiesType<T>
{
  /**
   * Technical entity name for MessageStoreEntryAttachmentProperties.
   */
  static override _entityName = 'MessageStoreEntryAttachmentProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageStoreEntryAttachmentProperties entity.
   */
  static _keys = ['AttachmentId', 'Name'];
  /**
   * Attachment Id.
   */
  declare attachmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessageStoreEntryAttachmentPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface MessageStoreEntryAttachmentPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  attachmentId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
