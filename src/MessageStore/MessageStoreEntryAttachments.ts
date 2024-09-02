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
import type { MessageStoreEntryAttachmentsApi } from './MessageStoreEntryAttachmentsApi';
import {
  MessageStoreEntryAttachmentProperties,
  MessageStoreEntryAttachmentPropertiesType
} from './MessageStoreEntryAttachmentProperties';

/**
 * This class represents the entity "MessageStoreEntryAttachments" of service "com.sap.hci.api".
 */
export class MessageStoreEntryAttachments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageStoreEntryAttachmentsType<T>
{
  /**
   * Technical entity name for MessageStoreEntryAttachments.
   */
  static override _entityName = 'MessageStoreEntryAttachments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageStoreEntryAttachments entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link MessageStoreEntryAttachmentProperties} entity.
   */
  declare properties: MessageStoreEntryAttachmentProperties<T>[];

  constructor(_entityApi: MessageStoreEntryAttachmentsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageStoreEntryAttachmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  properties: MessageStoreEntryAttachmentPropertiesType<T>[];
}
