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
import {
  IntegrationArtifact,
  IntegrationArtifactField
} from './IntegrationArtifact';
import type { MessageProcessingLogsApi } from './MessageProcessingLogsApi';
import {
  MessageStoreEntries,
  MessageStoreEntriesType
} from './MessageStoreEntries';

/**
 * This class represents the entity "MessageProcessingLogs" of service "com.sap.hci.api".
 */
export class MessageProcessingLogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogsType<T>
{
  /**
   * Technical entity name for MessageProcessingLogs.
   */
  static override _entityName = 'MessageProcessingLogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogs entity.
   */
  static _keys = ['MessageGuid'];
  /**
   * Message Guid.
   */
  declare messageGuid: DeserializedType<T, 'Edm.String'>;
  /**
   * Correlation Id.
   * @nullable
   */
  declare correlationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Message Id.
   * @nullable
   */
  declare applicationMessageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Message Type.
   * @nullable
   */
  declare applicationMessageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log Start.
   * @nullable
   */
  declare logStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Log End.
   * @nullable
   */
  declare logEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Sender.
   * @nullable
   */
  declare sender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver.
   * @nullable
   */
  declare receiver?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Flow Name.
   * @nullable
   */
  declare integrationFlowName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternate Web Link.
   * @nullable
   */
  declare alternateWebLink?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Artifact.
   */
  declare integrationArtifact: IntegrationArtifact<T>;
  /**
   * Log Level.
   * @nullable
   */
  declare logLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom Status.
   * @nullable
   */
  declare customStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link MessageStoreEntries} entity.
   */
  declare messageStoreEntries: MessageStoreEntries<T>[];

  constructor(_entityApi: MessageProcessingLogsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  messageGuid: DeserializedType<T, 'Edm.String'>;
  correlationId?: DeserializedType<T, 'Edm.String'> | null;
  applicationMessageId?: DeserializedType<T, 'Edm.String'> | null;
  applicationMessageType?: DeserializedType<T, 'Edm.String'> | null;
  logStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  logEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  sender?: DeserializedType<T, 'Edm.String'> | null;
  receiver?: DeserializedType<T, 'Edm.String'> | null;
  integrationFlowName?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  alternateWebLink?: DeserializedType<T, 'Edm.String'> | null;
  integrationArtifact: IntegrationArtifact<T>;
  logLevel?: DeserializedType<T, 'Edm.String'> | null;
  customStatus?: DeserializedType<T, 'Edm.String'> | null;
  messageStoreEntries: MessageStoreEntriesType<T>[];
}
