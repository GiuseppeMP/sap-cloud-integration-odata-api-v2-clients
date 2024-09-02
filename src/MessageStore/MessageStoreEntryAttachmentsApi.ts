/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageStoreEntryAttachments } from './MessageStoreEntryAttachments';
import { MessageStoreEntryAttachmentsRequestBuilder } from './MessageStoreEntryAttachmentsRequestBuilder';
import { MessageStoreEntryAttachmentPropertiesApi } from './MessageStoreEntryAttachmentPropertiesApi';
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
export class MessageStoreEntryAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MessageStoreEntryAttachments<DeSerializersT>, DeSerializersT>
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
  ): MessageStoreEntryAttachmentsApi<DeSerializersT> {
    return new MessageStoreEntryAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntryAttachmentPropertiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MessageStoreEntryAttachmentPropertiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROPERTIES: new Link('Properties', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MessageStoreEntryAttachments;

  requestBuilder(): MessageStoreEntryAttachmentsRequestBuilder<DeSerializersT> {
    return new MessageStoreEntryAttachmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageStoreEntryAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageStoreEntryAttachments<DeSerializersT>,
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
    typeof MessageStoreEntryAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageStoreEntryAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageStoreEntryAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      MessageStoreEntryAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      MessageStoreEntryAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      MessageStoreEntryAttachments<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntryAttachmentPropertiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageStoreEntryAttachments<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link contentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContentType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageStoreEntryAttachments)
      };
    }

    return this._schema;
  }
}
