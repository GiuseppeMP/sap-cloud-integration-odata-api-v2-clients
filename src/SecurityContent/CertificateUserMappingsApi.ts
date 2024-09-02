/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateUserMappings } from './CertificateUserMappings';
import { CertificateUserMappingsRequestBuilder } from './CertificateUserMappingsRequestBuilder';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class CertificateUserMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CertificateUserMappings<DeSerializersT>, DeSerializersT>
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
  ): CertificateUserMappingsApi<DeSerializersT> {
    return new CertificateUserMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CertificateUserMappings;

  requestBuilder(): CertificateUserMappingsRequestBuilder<DeSerializersT> {
    return new CertificateUserMappingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificateUserMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CertificateUserMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CertificateUserMappings<DeSerializersT>,
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
    typeof CertificateUserMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificateUserMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFICATE: EdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_TIME: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_TIME: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VALID_UNTIL: OrderableEdmTypeField<
      CertificateUserMappings<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CertificateUserMappings<DeSerializers>>;
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
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', false),
        /**
         * Static representation of the {@link certificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'Certificate',
          'Edm.Binary',
          false
        ),
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
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_TIME: fieldBuilder.buildEdmTypeField(
          'CreatedTime',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link validUntil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_UNTIL: fieldBuilder.buildEdmTypeField(
          'ValidUntil',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CertificateUserMappings)
      };
    }

    return this._schema;
  }
}
