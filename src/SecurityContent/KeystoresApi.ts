/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Keystores } from './Keystores';
import { KeystoresRequestBuilder } from './KeystoresRequestBuilder';
import { KeystoreEntriesApi } from './KeystoreEntriesApi';
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
export class KeystoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Keystores<DeSerializersT>, DeSerializersT>
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
  ): KeystoresApi<DeSerializersT> {
    return new KeystoresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link entries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENTRIES: Link<
      Keystores<DeSerializersT>,
      DeSerializersT,
      KeystoreEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [KeystoreEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENTRIES: new Link('Entries', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Keystores;

  requestBuilder(): KeystoresRequestBuilder<DeSerializersT> {
    return new KeystoresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Keystores<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Keystores<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Keystores<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Keystores, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Keystores, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      Keystores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      Keystores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_TIME: OrderableEdmTypeField<
      Keystores<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      Keystores<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENTRIES: Link<
      Keystores<DeSerializersT>,
      DeSerializersT,
      KeystoreEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Keystores<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'LastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_TIME: fieldBuilder.buildEdmTypeField(
          'LastModifiedTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Keystores)
      };
    }

    return this._schema;
  }
}
