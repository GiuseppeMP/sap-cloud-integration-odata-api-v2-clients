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
import type { MessageStoreEntriesApi } from './MessageStoreEntriesApi';
import {
    MessageStoreEntryProperties,
    MessageStoreEntryPropertiesType
} from './MessageStoreEntryProperties';

/**
 * This class represents the entity "MessageStoreEntries" of service "com.sap.hci.api".
 */
export class MessageStoreEntries<T extends DeSerializers = DefaultDeSerializers>
    extends Entity
    implements MessageStoreEntriesType<T> {
    /**
     * Technical entity name for MessageStoreEntries.
     */
    static override _entityName = 'MessageStoreEntries';
    /**
     * Default url path for the according service.
     */
    static override _defaultBasePath = '/';
    /**
     * All key fields of the MessageStoreEntries entity.
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
     * Message Store Id.
     * @nullable
     */
    declare messageStoreId?: DeserializedType<T, 'Edm.String'> | null;
    /**
     * Time Stamp.
     * @nullable
     */
    declare timeStamp?: DeserializedType<T, 'Edm.DateTime'> | null;
    /**
     * Has Attachments.
     * @nullable
     */
    declare hasAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
    /**
     * One-to-many navigation property to the {@link MessageStoreEntryProperties} entity.
     */
    declare properties: MessageStoreEntryProperties<T>[];

    constructor(_entityApi: MessageStoreEntriesApi<T>) {
        super(_entityApi);
    }
}

export interface MessageStoreEntriesType<
    T extends DeSerializers = DefaultDeSerializers
> {
    id: DeserializedType<T, 'Edm.String'>;
    messageGuid?: DeserializedType<T, 'Edm.String'> | null;
    messageStoreId?: DeserializedType<T, 'Edm.String'> | null;
    timeStamp?: DeserializedType<T, 'Edm.DateTime'> | null;
    hasAttachments?: DeserializedType<T, 'Edm.Boolean'> | null;
    properties: MessageStoreEntryPropertiesType<T>[];
}
