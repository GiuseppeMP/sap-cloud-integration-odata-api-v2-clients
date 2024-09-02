/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageStoreEntries } from './MessageStoreEntries';
import { MessageStoreEntriesRequestBuilder } from './MessageStoreEntriesRequestBuilder';
import { MessageStoreEntryAttachmentsApi } from './MessageStoreEntryAttachmentsApi';
import { MessageStoreEntryPropertiesApi } from './MessageStoreEntryPropertiesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class MessageStoreEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MessageStoreEntries<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MessageStoreEntriesApi<DeSerializersT> {
    return new MessageStoreEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link attachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS: Link<
      MessageStoreEntries<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntryAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      MessageStoreEntries<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntryPropertiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MessageStoreEntryAttachmentsApi<DeSerializersT>,
      MessageStoreEntryPropertiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ATTACHMENTS: new Link('Attachments', this, linkedApis[0]),
      PROPERTIES: new Link('Properties', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = MessageStoreEntries;

  requestBuilder(): MessageStoreEntriesRequestBuilder<DeSerializersT> {
    return new MessageStoreEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageStoreEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MessageStoreEntries<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageStoreEntries<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MessageStoreEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageStoreEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageStoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_GUID: OrderableEdmTypeField<
      MessageStoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_STORE_ID: OrderableEdmTypeField<
      MessageStoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_STAMP: OrderableEdmTypeField<
      MessageStoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    HAS_ATTACHMENTS: OrderableEdmTypeField<
      MessageStoreEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS: Link<
      MessageStoreEntries<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntryAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      MessageStoreEntries<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntryPropertiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageStoreEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link messageGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_GUID: fieldBuilder.buildEdmTypeField(
          'MessageGuid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_STORE_ID: fieldBuilder.buildEdmTypeField(
          'MessageStoreId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeStamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_STAMP: fieldBuilder.buildEdmTypeField(
          'TimeStamp',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link hasAttachments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ATTACHMENTS: fieldBuilder.buildEdmTypeField(
          'HasAttachments',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageStoreEntries)
      };
    }

    return this._schema;
  }
}
